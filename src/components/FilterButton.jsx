const FilterButton = ({ buttonText, activeFilter, setActiveFilter, index }) => {
  function highlightButton() {
    return activeFilter === buttonText
      ? 'dark:bg-red-400 dark:text-neutral-900 text-neutral-0 dark:hover:bg-red-500 hover:bg-red-400 bg-red-700 dark:shadow-[0_0_0_1px_var(--color-neutral-800)] shadow-[0_0_0_1px_var(--color-red-700)]'
      : 'dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:hover:text-neutral-0 hover:text-neutral-600 bg-neutral-0 dark:text-neutral-0 text-neutral-900 dark:shadow-[0_0_0_1px_var(--color-neutral-600)] shadow-[0_0_0_1px_var(--color-neutral-200)]'
  }

  return (
    <button
      onClick={() => setActiveFilter(buttonText)}
      className={`${highlightButton()} focus-border font-sm font-700 cursor-pointer rounded-4xl px-4 py-2 text-lg transition-colors`}
    >
      {buttonText}
    </button>
  )
}

export default FilterButton
