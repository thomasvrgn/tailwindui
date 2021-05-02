import { Apply } from '../../utils/ApplyChildren'; 

export const Basic = ({ children, className, apply }) => {
  return (
    <div className={'flex flex-row divide-x divide-gray-300 text-center w-max border-gray-300 border rounded-md shadow-sm ' + className}>
      <Apply props={apply} className="px-4 py-1 text-gray-600 focus:outline-none font-medium focus:bg-gray-50">
        {children}
      </Apply>
    </div>
  )
}

export const Icon = ({ children, className }) => {
  return (
    <Basic 
      className={className || ''} 
      apply={{className: 'px-2'}}
    >
      {children}
    </Basic>
  )
}