import Image from 'next/image'

const navigation = {
  connect: [
    { name: 'Book Meeting', href: '' },
    {
      name: 'Twitter',
      href: 'https://twitter.com/justansub',
    },
    {
      name: 'Github',
      href: 'https://www.youtube.com/@SpeedyBrand-SEO',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/speedy-brand-inc/',
    },
  ],
  company: [
    { name: 'Blogs', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Affiliate Partner', href: '/' },
    { name: 'AI For Enterprise', href: '/' },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-screen bg-black"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto w-full px-4 lg:px-8">
        <div className="flex flex-col justify-between space-y-16 lg:flex-row lg:space-y-0">
          <div className="space-y-8">
            <Image
              priority={true}
              unoptimized={true}
              width={100}
              height={40}
              src="/logo5.png"
              alt="logo"
              className="h-7 w-auto"
            />
            <p className="text-md max-w-xs leading-6 text-white">
                Elevate your digital presence with cutting-edge web solutions tailored for growth.
            </p>
            <div className="flex space-x-6 text-sm text-white">
              
            </div>
          </div>
          <div className="grid grid-cols-2 gap-14 md:grid-cols-2 lg:gap-24">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-white hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-200">
                Company
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6   text-white hover:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
       
          <p className="text-xs text-center leading-5 text-white">
            &copy; 2025 Ascension Wave. All rights reserved.
          </p>

      </div>
    </footer>
  )
}

export default TwoColumnFooter
