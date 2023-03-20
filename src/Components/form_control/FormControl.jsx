export default function FormControl({ label, error, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm" htmlFor="">
        {label}
      </label>
      <input
        {...props}
        className={`bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md ${props.className}`}
      />
      {error && <small className="text-sm text-red-400">{error}</small>}
    </div>
  )
}
