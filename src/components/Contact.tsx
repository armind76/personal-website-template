function Contact (){
	return (
		<div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
		<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Contact</h5>
		<p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Armin Doroudi</p>
		<p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Email: Armin.doroudi@gmail.com</p>
		<p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">You can also find me at the following links</p>
		<div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
		<a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
		<svg className="mr-1 w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
		<path
		d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387 0.599 0.111 0.793-0.261 0.793-0.577v-2.234c-3.338 0.724-4.032-1.606-4.032-1.606-0.546-1.387-1.333-1.756-1.333-1.756-1.087-0.744 0.084-0.729 0.084-0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.493 0.998 0.108-0.776 0.418-1.305 0.762-1.605-2.665-0.299-5.467-1.332-5.467-5.934 0-1.311 0.469-2.381 1.236-3.221-0.124-0.301-0.535-1.524 0.118-3.176 0 0 1.008-0.322 3.301 1.231 0.959-0.266 1.984-0.399 3.004-0.399 1.02 0 2.046 0.133 3.005 0.399 2.291-1.553 3.299-1.231 3.299-1.231 0.653 1.653 0.242 2.875 0.118 3.176 0.769 0.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.923 0.43 0.372 0.823 1.102 0.823 2.222v3.293c0 0.319 0.192 0.694 0.801 0.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
		/>
		</svg>
		<div className="text-left rtl:text-right">
		<div className="-mt-1 font-sans text-sm font-semibold">Github</div>
		</div>
		</a>
		<a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
		<svg className="mr-1 h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
		</svg>
		<div className="text-left rtl:text-right">
		<div className="-mt-1 font-sans text-sm font-semibold">LinkedIn</div>
		</div>
		</a>
		</div>
		</div>

	)

}
export default Contact
