/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

// Hard coded example of breadcrumbs, refactor with map statement using history 

export default function BreadCrumbs() {
  return (
    <div>
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Home
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a href="/snippets" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Snippets
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a href="/snippets/create" aria-current="page" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Create Snippet 
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Create Snippet</h2>
        </div>
        
        </div>
    </div>
  )
}
