import { Banner } from 'components/Banner';
import { Footer } from 'components/Footer';
import { Nav } from 'components/Nav';
import { Seo } from 'components/Seo';
import { Sticky } from 'components/Sticky';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { siteConfig } from 'siteConfig';
import Highlight from '../components/Highlight';

const Home = () => {
  return (
    <>
      <Seo
        title="orval"
        description="orval is able to generate client with appropriate type-signatures (TypeScript) from any valid OpenAPI v3 or Swagger v2 specification, either in yaml or json formats. 🍺"
      />
      <Head>
        <title>orval - Restful client generator</title>
      </Head>
      <div className="bg-gray-50 h-full min-h-full">
        <Banner />
        <Sticky>
          <Nav />
        </Sticky>
        <div className="relative bg-white overflow-hidden">
          <div className="py-24 mx-auto container px-4 sm:mt-12  relative">
            <img
              src={require('images/emblem.svg')}
              className="absolute transform right-0 top-5/12 h-0 lg:h-full scale-100 translate-x-1/12 -translate-y-1/2"
              alt="orval Emblem"
            />
            <div className="grid grid-cols-12 lg:gap-8">
              <div className="col-span-12 lg:col-span-6 ">
                <div className="text-center lg:text-left md:max-w-2xl md:mx-auto ">
                  <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    Generate client
                    <br className="hidden md:inline xl:hidden" />{' '}
                    <span>with appropriate type-signatures</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Generate, valid, cache and mock in your frontend
                    applications all with your OpenAPI specification.
                  </p>

                  <div className="mt-5  mx-auto sm:flex sm:justify-center lg:justify-start lg:mx-0 md:mt-8">
                    <div className="rounded-md shadow">
                      <Link href="/overview">
                        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-coral hover:bg-coral-light focus:outline-none focus:border-coral focus:shadow-outline-coral transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                          Get Started
                        </a>
                      </Link>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <a
                        href={siteConfig.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-coral bg-white hover:text-coral-light focus:outline-none focus:border-coral-light focus:shadow-outline-coral transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg border-t border-gray-200 bg-gray-50 ">
          <div className="py-24  ">
            <div className="mx-auto container">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <div>
                    <h3 className="text-xl leading-6 xl:text-2xl font-bold text-gray-900">
                      Productivity
                    </h3>
                    <p className="mt-2 lg:mt-4 text-base xl:text-lg lg:leading-normal leading-6 text-gray-600">
                      Save time to drink a 🍺, get your api ready out of the box
                      in a few seconds. Prevent human error, be sure on the
                      return result by imposing standard formatting.
                    </p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div>
                    <h3 className="text-xl leading-6 xl:text-2xl font-bold text-gray-900">
                      Error boundary
                    </h3>
                    <p className="mt-2  lg:mt-4 text-base xl:text-lg lg:leading-normal leading-6 text-gray-600">
                      Get your contract ! With the combination of orval and
                      openapi, you have a strong standard for your team which
                      avoid any problem of missunderstanding and give you the
                      possibility to focus on your ui.
                    </p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div>
                    <h3 className="text-xl leading-6 xl:text-2xl font-bold text-gray-900">
                      API mocking
                    </h3>
                    <p className="mt-2  lg:mt-4 text-base xl:text-lg lg:leading-normal leading-6 text-gray-600">
                      Don't wait for your backend to be ready to test your
                      application. Generate your mocks with Orval, knowing that
                      you are ready to be connected to your API.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 relative py-24 border-t border-gray-200 ">
          <div className="px-4 sm:px-6 lg:px-8  mx-auto container max-w-3xl sm:text-center">
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:leading-none mt-2">
              Less Time. More productivity.
            </h3>
            <p className="my-4 text-xl leading-7  text-gray-600">
              Instead of losing time writing your models, HTTP calls and mocks,
              go ahead and be focused on the other requirements.
            </p>
          </div>
          <div
            style={{
              height: 224,
            }}
          />
        </div>

        <section className="bg-coral body-font">
          <div className="container max-w-7xl px-4  mx-auto -mt-72 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-x-hidden">
              <Highlight>
                {`module.exports = {
  petstore: {
    output: {
      mode: 'split',
      target: './src/petstore.ts',
      schemas: './src/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: './petstore.yaml',
    },
  },
};
`}
              </Highlight>
              <Highlight>
                {`
my-app
└── src
    ├── petstore.definition.ts
    ├── petstore.schemas.ts
    ├── petstore.msw.ts
    ├── petstore.ts
    └── model
        ├── index.ts
        ├── pet.ts
        ├── pets.ts
        ├── createPetsBody.ts
        └── error.ts


`}
              </Highlight>
            </div>
          </div>
          <div className="py-24 px-4 sm:px-6 lg:px-8  mx-auto container">
            <div className=" sm:text-center pb-16">
              <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight text-white sm:text-4xl  lg:leading-none mt-2">
                One generator to rule them all.
              </h3>
            </div>
            <div>
              <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 text-white max-w-screen-lg mx-auto text-lg">
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Codegen
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Model Typescript
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Axios Client
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  React query
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Angular
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Config override
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Faker Mock
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  MSW
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Swagger validation
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Easy setup
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Just a CLI
                </a>
                <a className="mb-2">
                  <span className="bg-coral-light text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <Check />
                  </span>
                  Import from link
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-gray-100 border-b border-gray-300">
          <div className="container mx-auto py-12 text-center">
            <h3 className="text-2xl md:text-5xl mx-auto leading-tight font-extrabold tracking-tight   lg:leading-none mt-2">
              You want to support open-source?
            </h3>
            <div className="inline-flex rounded-md shadow mt-12">
              <a
                href="https://github.com/sponsors/anymaniax"
                target="_blank"
                className="inline-flex items-center justify-center text-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-coral hover:bg-coral-light focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Become a sponsor
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto py-24 px-4 flex flex-wrap md:flex-no-wrap items-center justify-between md:space-x-8">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Ready to dive in?
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 md:mt-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/overview">
                  <a className="inline-flex items-center justify-center text-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-coral hover:bg-coral-light focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Okay, let's get started!
                  </a>
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href={siteConfig.repoUrl}
                  className="inline-flex items-center justify-center text-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-coral bg-white hover:text-coral-light focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
Home.displayName = 'Home';
const Check = React.memo(() => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    className="w-3 h-3"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5"></path>
  </svg>
));
