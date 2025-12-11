import 'animate.css';

export default function InputField({
  label,
  register,
  name,
  type = "text",
  placeholder,
  errors,
  rules = {},
}) {
  return (
    <div className="w-full mb-4 flex flex-col animate__animated animate__fadeIn">
      {label && (
        <label className="mb-1 text-oasis-header font-oasis-text">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        className="w-full p-3 border-b-2 border-oasis-light focus:outline-none focus:border-oasis-aqua transition-all"
        {...register(name, rules)}
      />

      {errors[name] && (
        <p className="text-red-500 mt-1 text-sm font-oasis-text">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}
