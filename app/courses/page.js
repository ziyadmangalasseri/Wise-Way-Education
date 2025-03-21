import Link from 'next/link';

export default async function Courses() {
  try {
    const response = await fetch('https://wiseway.wmsapphub.com/api/user/getcourse/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch courses: ${response.status}`);
    }

    const data = await response.json();

    if (data.response !== "Success" || !data.course) {
      throw new Error('Invalid data format');
    }

    const courses = data.course;

    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-3xl overflow-hidden flex flex-col h-full"
              style={{
                boxShadow: '5px 8px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={`https://wiseway.wmsapphub.com/${course.image}`} 
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-black">{course.name}</h2>
                <p className="text-black mb-6 text-sm leading-relaxed">
                  {course.description.length > 120 
                    ? `${course.description.substring(0, 120)}...` 
                    : course.description}
                </p>
                <Link 
                  href={`/courses/${course.id}`} 
                  className="flex items-center text-black font-medium mt-auto"
                >
                  View More Courses
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.error('Error details:', err);
    return (
      <div className="text-center p-10 text-red-500">
        Error: {err.message}
      </div>
    );
  }
}