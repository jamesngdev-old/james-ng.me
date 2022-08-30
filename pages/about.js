import {
  CakeIcon,
  EmailIcon,
  GithubIcon,
  HomeIcon,
  LinkedInIcon,
  PhoneIcon,
} from '@/components/icon/about'
import { Fragment } from 'react'
import Image from '@/components/Image'

const AboutSection = () => (
  <div className="about-me">
    <h1 className="text-2xl font-bold uppercase">About me</h1>
    <div className="content">
      <p className="mt-2">
        I am a fullstack developer with{' '}
        <span className="decoration-sky-500/3 font-semibold">
          2 years of experience in Javascript technologies (NodeJS, ReactJS, NestJS, MongoDB,...)
        </span>{' '}
        . Learning new languages and technologies is what I am passionate about. I am considered a
        team-player because I like to help other and tend to work well within groups. I like helping
        other and work well with group. I can also do some mentoring tasks.
      </p>
      <p>
        I am also the owner of an IT blog called:{' '}
        <a href="https://james-ng.me" className="text-blue-500">
          jamesng-dev.me
        </a>{' '}
        , and a{' '}
        <a href="https://james-ng.me" className="text-blue-500">
          Youtube chanel
        </a>{' '}
        to share about the coding.
      </p>
    </div>
  </div>
)

const EducationSection = () => (
  <div className="education mt-6">
    <h1 className="text-2xl font-bold uppercase">Education</h1>
    <div className="item mt-4 rounded-lg bg-white p-4 drop-shadow-md dark:bg-zinc-900 dark:text-white">
      <div className="flex justify-between">
        <p className="text-sm font-light">2019 - 2023</p>
        <p className="text-sm font-light">Bachelor Degree</p>
      </div>
      <p className="mt-2 font-medium">Thuyloi University</p>
      <span className="h-1 border-t-zinc-600"></span>
      <span className="text-sm font-light text-gray-800 dark:text-white">
        - National Informatics Olympiad 2020 - Non-specialist block
      </span>
    </div>
  </div>
)

const SkillSection = () => (
  <div className="skill mt-6">
    <h1 className="text-2xl font-bold uppercase">SKILLS</h1>
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="col-span-1 items-center rounded-lg bg-white p-4 p-4 drop-shadow-md dark:bg-zinc-900">
        <div className="item">
          <p className="font-semibold">Programming Languages</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>HTML / CSS</li>
            <li>
              <span className="font-semibold"> Typescript / Javascript</span>
            </li>
            <li>PHP</li>
          </ol>
        </div>
        <div className="item mt-2">
          <p className="font-semibold">Frameworks & platforms</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>
              <span className="font-semibold">ReactJS</span> / NextJS / AngularJS
            </li>
            <li>
              <span className="font-semibold">NodeJS</span> /{' '}
              <span className="font-semibold">ExpressJS</span> /{' '}
              <span className="font-semibold">NestJS</span>
            </li>
            <li>
              RestfulAPI / <span className="font-semibold">GraphQL</span>
            </li>
            <li>Facebook SDK / Firebase</li>
            <li>Boostrap / Tailwind / Jquery</li>
          </ol>
        </div>
      </div>
      <div className="col-span-1 items-center rounded-lg bg-white  p-4 p-4 drop-shadow-md dark:bg-zinc-900">
        <div className="item">
          <p className="font-semibold">Database</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>Microsoft SQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ol>
        </div>

        <div className="item">
          <p className="font-semibold">DevOps</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>Lunix</li>
            <li>Docker / Kubernetes</li>
            <li>CD/CI</li>
            <li>AWS</li>
          </ol>
        </div>

        <div className="item mt-2">
          <p className="font-semibold">IDE</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>Vim</li>
            <li>Webstorm</li>
          </ol>
        </div>
      </div>

      <div className="col-span-1 items-center rounded-lg bg-white p-4  p-4 drop-shadow-md dark:bg-zinc-900">
        <div className="item mt-2">
          <p className="font-semibold">Version Control</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>Git (Git Shell & Github)</li>
          </ol>
        </div>

        <div className="item mt-2">
          <p className="font-semibold">Foreign Language</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>English: Reading / Speaking</li>
          </ol>
        </div>

        <div className="item mt-2">
          <p className="font-semibold">Knowledge</p>
          <ol className="mt-2 list-disc pl-6 text-sm text-gray-500">
            <li>Good understanding about the Agile and Scrum process</li>
            <li>Good understanding software design, database design, RestfulAPI, ...</li>
            <li>Good time management, presentation and teamwork skills ...</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
)

const CertificateSection = () => (
  <div className="certificate mt-6">
    <h1 className="text-2xl font-bold uppercase">Certificates</h1>
    <div className="item mt-4 rounded-lg bg-white  p-4 drop-shadow-md dark:bg-zinc-900">
      <div className="flex justify-between">
        <p className="text-sm font-light">Amazon</p>
        <p className="text-sm font-light">01/2023</p>
      </div>
      <p className="mt-2 font-medium">AWS Certified Developer — Associate</p>
    </div>

    <div className="item mt-4 mt-4 rounded-lg bg-white  p-4 drop-shadow-md dark:bg-zinc-900">
      <div className="flex justify-between">
        <p className="text-sm font-light">English</p>
        <p className="text-sm font-light">01/2023</p>
      </div>
      <p className="mt-2 font-medium">TOEIC: 810/900</p>
    </div>
  </div>
)

const ExperienceSection = () => (
  <div className="experiences mt-6">
    <h1 className="text-2xl font-bold uppercase">Experiences</h1>
    <div className="item mt-4 ">
      <div className="grid grid-cols-3 items-center gap-5 rounded-lg bg-white  p-4 drop-shadow-md dark:bg-zinc-900">
        <div className="col-span-1 text-center">
          <p className="text-center text-lg font-bold uppercase">Tigren Solutions</p>
          <p className="font-normal">(Front End Developer)</p>
          <span className="text-center text-sm">06/2020 - 08/2021</span>
        </div>
        <div className="col-span-2">
          <ol className="list-disc pl-6 text-sm text-gray-800  dark:text-white">
            <li>
              <span className="font-bold">Projects: </span>
              <span>Tigren PWA, SiamNarkarin, Shopteene, ShopEddies, PWAStudio modules...</span>
            </li>
            <li>
              <span className="font-bold">Project Description: </span>
              <span>E-commerce projects built on the Magento platform.</span>
            </li>
            <li>
              <span className="font-bold">Team size: </span>
              <span>9</span>
            </li>
            <li>
              <span className="font-bold">Responsiblities: </span>
              <span>
                Collaborate with backend to build API. Develop a base theme, extension modules for
                the theme.
              </span>
            </li>
            <li>
              <span className="font-bold">Technologies: </span>
              <span>ReactJS, Tailwind CSS, SCSS, Webpack, GraphQL, PWA</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 items-center gap-5 rounded-lg bg-white  p-4 drop-shadow-md dark:bg-zinc-900">
        <div className="col-span-1 text-center">
          <p className="text-center text-lg font-bold uppercase">Comartek</p>
          <p className="font-normal">(Fullstack Developer)</p>
          <span className="text-center text-sm">08/2021 - Now</span>
        </div>
        <div className="col-span-2">
          <ol className="list-disc pl-6 text-sm text-gray-800 dark:text-white">
            <li>
              <span className="font-bold">Projects: </span>
              <span>Win Booking, Win Solution, WS WebShop, MetaHall,...</span>
            </li>
            <li>
              <span className="font-bold">Project Description: </span>
              <span>
                Projects on sales supply chain management, e-commerce website, CMS Management,...
              </span>
            </li>
            <li>
              <span className="font-bold">Team size: </span>
              <span>9-12</span>
            </li>
            <li>
              <span className="font-bold">Responsiblities: </span>
              <span>
                Meeting with customers and teammates to get clear requirement. Develop the
                frameworks and modules of the system.
              </span>
            </li>
            <li>
              <span className="font-bold">Technologies: </span>
              <span>
                NodeJS, NestJS, GraphQL, Restfull API, Micro services, GRPC | ReactJS, NextJS,
                Webpack, Antd, SCSS | MongoDB, Redis
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
)

const InformationSection = () => (
  <Fragment>
    <img src="/static/images/avatar.png" alt="" className="w-52 rounded-xl" />
    <p className="mt-4 text-2xl font-medium uppercase text-slate-900">Nguyen Van Tri</p>
    <p className="font-light">(James Nguyen)</p>

    <div className="social mt-2 mt-4 flex flex-col gap-1 bg-white dark:bg-zinc-900">
      <p className="flex flex-row items-center gap-1 text-sm">
        <CakeIcon /> 22/01/2001
      </p>
      <p className="flex flex-row items-center gap-1 text-sm">
        <PhoneIcon /> 0971.010421
      </p>
      <p className="flex flex-row items-center gap-1 text-sm">
        <EmailIcon /> jamesngdev@gmail.com
      </p>
      <p className="flex flex-row items-center gap-1 text-sm">
        <HomeIcon /> Cau Giay, Ha Noi, Viet Nam
      </p>
      <p className="flex flex-row items-center gap-1 text-sm">
        <GithubIcon /> jamesngdev
      </p>
      <p className="flex flex-row items-center gap-1 text-sm">
        <LinkedInIcon /> jamesngdev
      </p>
    </div>
  </Fragment>
)

const ProjectSection = () => (
  <div className="projectSection mt-6">
    <h1 className="text-2xl font-bold uppercase">Projects</h1>
    <div className="item mt-4 ">
      <div className="grid grid-cols-2 items-center gap-5">
        <div className="col-span-1 divide-y divide-gray-300 rounded-lg bg-white p-4 drop-shadow-md dark:bg-zinc-900 ">
          <div>
            <img
              src="/static/images/projects/digicard.png"
              className="m-0"
              style={{
                height: 70,
                margin: '0 auto',
              }}
              alt="Digicard"
            />
            <h3 className="mt-4 text-center font-bold uppercase">Digicard</h3>
            <p className="text-center font-light">app.digicard.vn</p>
          </div>

          <div className="tech mt-2">
            <p className="mt-2 inline-block italic">Techs: </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="rounded-lg bg-blue-500 p-1 text-sm text-white">React.js</span>
              <span className="rounded-lg bg-emerald-500 p-1 text-sm text-white">Node.js</span>
              <span className="rounded-lg bg-amber-500 p-1 text-sm text-white">Webpack</span>
              <span className="rounded-lg bg-violet-500 p-1 text-sm text-white">MongoDB</span>
              <span className="rounded-lg bg-cyan-500 p-1 text-sm text-white">GraphQL</span>
            </div>
          </div>

          <div className="tech my-4 pt-4 align-middle">
            <p className="mt-2 italic">Position: </p>
            <span className="inline-block rounded-lg bg-cyan-500 p-1 text-sm text-white">
              Freelancer
            </span>
          </div>
        </div>

        <div className="col-span-1 divide-y divide-gray-300 rounded-lg bg-white p-4 drop-shadow-md dark:bg-zinc-900">
          <div>
            <img
              src="/static/images/projects/hknet.png"
              className="w-fit"
              style={{
                height: 70,
                margin: '0 auto',
              }}
              alt="Hknet"
            />
            <h3 className="mt-4 text-center font-bold uppercase">HKNET</h3>
            <p className="text-center text-sm font-light">hknet.vn</p>
          </div>

          <div className="tech mt-2">
            <p className="mt-2 inline-block italic">Techs: </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="rounded-lg bg-blue-500 p-1 text-sm text-white">PHP</span>
              <span className="rounded-lg bg-emerald-500 p-1 text-sm text-white">Laravel</span>
              <span className="rounded-lg bg-amber-500 p-1 text-sm text-white">Boostrap</span>
              <span className="rounded-lg bg-violet-500 p-1 text-sm text-white">Jquery</span>
              <span className="rounded-lg bg-cyan-500 p-1 text-sm text-white">MySQL</span>
            </div>
          </div>

          <div className="tech my-4 pt-4 align-middle">
            <p className="mt-2 italic">Position: </p>
            <span className="inline-block rounded-lg bg-cyan-500 p-1 text-sm text-white">
              Freelancer
            </span>
          </div>
        </div>

        <div className="col-span-1 divide-y divide-gray-300 rounded-lg bg-white p-4 drop-shadow-md dark:bg-zinc-900">
          <div>
            <img
              src="/static/images/projects/fabin-toolkit.png"
              className="w-fit"
              style={{
                height: 70,
                margin: '0 auto',
              }}
              alt="Fabin Toolkit"
            />
            <h3 className="mt-4 text-center font-bold uppercase">Fabin Toolkit</h3>
            <p className="text-center text-sm font-light">github.com/jamesngdev/fabin-toolkit</p>
          </div>

          <div className="tech mt-2">
            <p className="mt-2 inline-block italic">Techs: </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="rounded-lg bg-blue-500 p-1 text-sm text-white">React.js</span>
              <span className="rounded-lg bg-emerald-500 p-1 text-sm text-white">Chrome API</span>
              <span className="rounded-lg bg-amber-500 p-1 text-sm text-white">Webpack</span>
              <span className="rounded-lg bg-cyan-500 p-1 text-sm text-white">SCSS</span>
              <span className="rounded-lg bg-violet-500 p-1 text-sm text-white">Facebook SDK</span>
            </div>
          </div>

          <div className="tech my-4 pt-4 align-middle">
            <p className="mt-2 italic">Position: </p>
            <span className="inline-block rounded-lg bg-cyan-500 p-1 text-sm text-white">
              Freelancer
            </span>
          </div>
        </div>

        <div className="col-span-1 divide-y divide-gray-300 rounded-lg bg-white p-4 drop-shadow-md dark:bg-zinc-900">
          <div>
            <img
              src="/static/images/projects/tigren-pwa.png"
              className="w-fit"
              style={{
                height: 70,
                margin: '0 auto',
              }}
              alt="Tigren PWA"
            />
            <h3 className="mt-4 text-center font-bold uppercase">Tigren PWA</h3>
            <p className="text-center text-sm font-light">demo.tigrenpwa.com</p>
          </div>

          <div className="tech mt-2">
            <p className="mt-2 inline-block italic">Techs: </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="rounded-lg bg-blue-500 p-1 text-sm text-white">React.js</span>
              <span className="rounded-lg bg-emerald-500 p-1 text-sm text-white">PWA</span>
              <span className="rounded-lg bg-amber-500 p-1 text-sm text-white">Webpack</span>
              <span className="rounded-lg bg-cyan-500 p-1 text-sm text-white">GraphQL</span>
              <span className="rounded-lg bg-violet-500 p-1 text-sm text-white">
                PageSpeed Optimize
              </span>
            </div>
          </div>

          <div className="tech my-4 pt-4 align-middle">
            <p className="mt-2 italic">Position: </p>
            <span className="inline-block rounded-lg bg-cyan-500 p-1 text-sm text-white">
              Front End Developer
            </span>
          </div>
        </div>

        <div className="col-span-2 divide-y divide-gray-300 rounded-lg bg-white p-4 drop-shadow-md dark:bg-zinc-900">
          <p>
            ️🎉 Still has many many projects but I can't show for you. If you want, explore{' '}
            <a className="text-blue-500" href={'https://github.com/jamesngdev'}>
              my github profile
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default function About() {
  return (
    <div className="about">
      <div className="grid gap-10 lg:grid-cols-4">
        <div className="col-span-1 items-center bg-white p-4 dark:border-b-gray-500 dark:bg-zinc-900">
          <InformationSection />
        </div>

        <div className="col-span-3 bg-white  dark:bg-zinc-900">
          <AboutSection />
          <EducationSection />
          <SkillSection />
          <CertificateSection />
          <ExperienceSection />
          <ProjectSection />
        </div>
      </div>
    </div>
  )
}
