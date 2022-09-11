import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const Profile = () => {
  return (
    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
      {/* Breadcrumb */}
      <nav
        className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
        aria-label="Breadcrumb"
      >
        <a
          href="#"
          className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
        >
          <ChevronLeftIcon
            className="-ml-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Directory</span>
        </a>
      </nav>

      <article>
        {/* Profile header */}
        <div>
          <div>
            <img
              className="h-32 w-full object-cover lg:h-48"
              src={profile.coverImageUrl}
              alt=""
            />
          </div>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={profile.imageUrl}
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                  <h1 className="truncate text-2xl font-bold text-gray-900">
                    {profile.name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {profile.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Description list */}
        <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            {Object.keys(profile.fields).map((field) => (
              <div key={field} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">{field}</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {profile.fields[field]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </main>
  );
};

export default Profile;
