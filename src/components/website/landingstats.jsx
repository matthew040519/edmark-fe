/* eslint-disable jsx-a11y/anchor-is-valid */
import LandingPolygon from "./polygon";
const stats = [
    { id: 1, name: 'Bacolod Users', value: '3000' },
    { id: 2, name: 'Ilo-Ilo Users', value: '2000' },
    // { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
  export default function LandingStats() {
    return (
      <div className="bg-white py-24 sm:py-5">
        <LandingPolygon />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-30 sm:py-48 lg:py-5">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Trusted by people worldwide
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
          </div>
        </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  