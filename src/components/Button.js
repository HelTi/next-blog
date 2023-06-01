import classNames from 'classnames';

export default function Button({ loading, disabled, children, ...rest }) {
  const buttonClass = classNames('w-full flex items-center justify-center rounded-sm p-2 text-sm text-gray-500 hover:bg-slate-100', { 'cursor-not-allowed': loading || disabled });
  const onClick = ()=>{
    if(rest.loading) return false
    return rest.onClick()
  }
  const loadingSvg = (
    <svg
      className="-ml-1 mr-3 h-5 w-5 animate-spin text-base-theme-100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled = {loading || disabled}
      {...rest}
    >
      {loading ? loadingSvg : children}
    </button>
  );
}
