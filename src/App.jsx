import Header from './components/Header'
import ExtensionItem from './components/ExtensionItem'
import FilterButton from './components/FilterButton'
import { v4 as uuidv4 } from 'uuid'
import { AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeFilter, setActiveFilter] = useState('All')
  const [data, setData] = useState([])
  const filters = ['All', 'Active', 'Inactive']

  async function getData() {
    try {
      const response = await fetch(`/data.json`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const jsonData = await response.json()
      const dataWithIds = jsonData.map((item) => ({
        ...item,
        id: uuidv4(),
      }))
      setData(dataWithIds)
    } catch (error) {
      console.log(error)
    }
  }

  const filteredData = data.filter((item) => {
    if (activeFilter === 'All') {
      return true
    }
    if (activeFilter === 'Active') {
      return item.isActive
    }
    if (activeFilter === 'Inactive') {
      return !item.isActive
    }
  })

  function toggleItem(id) {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive }
      }
      return item
    })
    setData(newData)
  }

  function removeItem(currentItem) {
    const newItems = data.filter((item) => {
      return item.id !== currentItem.id
    })
    setData(newItems)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div
      data-theme={theme}
      className="py-padding-y px-padding-x bg-light-gradient dark:bg-dark-gradient min-h-screen max-w-[1920px]"
    >
      <Header theme={theme} setTheme={setTheme} />
      <main className="pt-12 sm:pt-16">
        <section>
          <header className="flex flex-col items-center justify-between gap-7 sm:flex-row sm:gap-0">
            <h1 className="dark:text-neutral-0 text-3xl font-bold text-neutral-900">Extensions List</h1>
            <div className="flex gap-4">
              {filters.map((filter, index) => {
                return (
                  <FilterButton
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    key={index}
                    index={index}
                    buttonText={filter}
                  />
                )
              })}
            </div>
          </header>

          <ul className="flex flex-wrap justify-between gap-4 pt-8">
            <AnimatePresence>
              {filteredData.map((item) => (
                <ExtensionItem key={item.id} item={item} toggleItem={toggleItem} removeItem={removeItem} />
              ))}
            </AnimatePresence>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
