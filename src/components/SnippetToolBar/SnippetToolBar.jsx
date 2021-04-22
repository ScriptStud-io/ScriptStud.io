/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, PaperClipIcon, PencilIcon, TrashIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import {useHistory} from 'react-router-dom';

export default function Example(props) {
  console.log('props: ', props)
console.log('window: ', window)

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-white-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
          <button
            type="button"
            onClick={props.editClickHandler}
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-yellow-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon className="h-7 w-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={props.deleteClickHandler}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-red-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            
            <span className="sr-only">Delete</span>
            <TrashIcon className="h-7 w-7" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
  )
}