import { motion } from 'motion/react'

const ExtensionItem = ({ removeItem, item, toggleItem }) => {
  const { logo, name, description, isActive } = item

  const hoverButtonStyles =
    'dark:hover:bg-red-500 hover:bg-red-700 dark:hover:text-neutral-900 hover:text-neutral-100 dark:hover:shadow-[0_0_0_1px_var(--color-neutral-900)]'

  const cardShadow =
    'dark:shadow-[0_0_0_1px_var(--color-neutral-600)] shadow-[0_0_0_1px_var(--color-neutral-200),_0_4px_6px_var(--color-neutral-200)]'

  const inputCheckBaseStyles =
    "peer rounded-full h-6 w-11 relative peer-focus:ring-4 peer-focus:outline-2 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full transition-all after:transition-all"

  return (
    <motion.li
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
      className={`${cardShadow} bg-neutral-0 grid min-h-[200px] min-w-[300px] flex-1 shrink flex-wrap rounded-2xl p-4 text-white dark:bg-neutral-800`}
    >
      <div className="flex items-start gap-4 self-start">
        <img src={logo} alt="" />
        <div>
          <p className="text-2xl font-bold text-neutral-900 2xl:text-3xl dark:text-neutral-100">{name}</p>
          <p className="text-neutral-600 2xl:text-lg dark:text-neutral-300">{description}</p>
        </div>
      </div>
      <div className="flex justify-between self-end">
        <button
          onClick={() => {
            removeItem(item)
          }}
          className={`${hoverButtonStyles} focus-border cursor-pointer rounded-4xl px-4 py-2 text-neutral-900 shadow-[0_0_0_1px_var(--color-neutral-300)] transition-colors focus:bg-neutral-100 dark:text-neutral-100 dark:shadow-[0_0_0_1px_var(--color-neutral-600)] dark:focus:bg-neutral-600`}
        >
          Remove
        </button>

        <label htmlFor={`toggle-${item.id}`} className="inline-flex cursor-pointer items-center">
          <input
            id={`toggle-${item.id}`}
            checked={isActive}
            aria-label={isActive ? `Deactivate ${name} Extension` : `Activate ${name} Extension`}
            onChange={() => toggleItem(item.id)}
            type="checkbox"
            className="peer sr-only"
          />
          <div
            className={`${inputCheckBaseStyles} peer-focus:outline-neutral-0 bg-gray-200 peer-checked:bg-red-700 peer-focus:ring-red-400 after:border-gray-300 after:bg-white peer-checked:hover:bg-red-400 dark:bg-neutral-600 dark:peer-checked:bg-red-400 dark:peer-focus:ring-red-400 dark:peer-focus:outline-neutral-900 dark:peer-checked:hover:bg-red-500`}
          ></div>
        </label>
      </div>
    </motion.li>
  )
}

export default ExtensionItem
