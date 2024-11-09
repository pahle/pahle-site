import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Sparkles from '@/components/Sparkles'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import Project from '@/components/Project'
import logoMedia from '@/images/logos/media.ico'
import logoProspera from '@/images/logos/prospera.ico'
import logoHyundai from '@/images/logos/hyundai.ico'
import logoMartinee from '@/images/logos/martinee.ico'
import logoNaufalArt from '@/images/logos/naufal-art.ico'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contact() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Send me a message!</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        I’ll get back to you as soon as possible.
      </p>
      <div className="mt-6 flex flex-col gap-5">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <textarea
          placeholder="Message"
          aria-label="Message"
          rows={10}
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="flex-none">
          Send Message
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
        <Image
          src={role.logo}
          alt={role.company}
          className="object-contain"
          unoptimized
          width={28}
          height={28}
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-800 dark:text-zinc-200">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-800 dark:text-zinc-200"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          {endDate && (
            <>
              – <time dateTime={endDate}>{endLabel}</time>
            </>
          )}
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'CV. Media Cipta Gemilang',
      title: 'Full-Stack Developer',
      logo: logoMedia,
      start: '2020',
      end: {
        label: '2023',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'PT. Prospera Science Digita',
      title: 'Full-Stack Developer',
      logo: logoProspera,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Hyundai Yogyakarta',
      title: 'Full-Stack Developer',
      logo: logoHyundai,
      start: '2023',
      end: ''
    },
    {
      company: 'Martinee Studio',
      title: 'Freelance Front-End Developer',
      logo: logoMartinee,
      start: '2024',
      end: '',
    },
    {
      company: 'NaufalArt',
      title: 'Freelance Front-End Developer',
      logo: logoNaufalArt,
      start: '2022',
      end: '',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/cv.pdf" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <Project number={3} />
      <Button
        href="/projects"
        variant="secondary"
        className="group mt-12 w-full"
      >
        More Projects
      </Button>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-xs md:max-w-3xl lg:max-w-3xl">
          <p className="mb-6 text-base text-zinc-600 dark:text-zinc-400">
            Hello, my name is
          </p>
          <h1 className="relative text-4xl font-bold tracking-tight text-zinc-800 md:text-4xl lg:text-5xl dark:text-zinc-100">
            Mohammad Rayhan Arkan Fahlevi
            <div className="absolute right-[5.2rem] top-[-3rem] hidden py-12 opacity-0 duration-[2s] hover:top-[-5.50rem] hover:opacity-100 lg:inline">
              <Sparkles className="">
                <h1 className="inline-block bg-gradient-to-b from-teal-100 from-0% to-teal-500 to-100% bg-clip-text font-extrabold text-transparent">
                  Pahle
                </h1>
              </Sparkles>
            </div>
            <span className="absolute -right-6 top-5 hidden text-xs lg:block">
              {'<- Hover me!'}
            </span>
          </h1>
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a{' '}
            <Sparkles className="">
              <h1 className="inline-block bg-gradient-to-b from-[#fff0cf] from-0% to-[#fcba28] to-100% bg-clip-text text-lg font-extrabold text-transparent">
                Full Stack Developer
              </h1>
            </Sparkles>{' '}
            based in Bogor, Indonesia. I specialize in building high-quality
            websites and applications.
          </div>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
            <SocialLink
              href="https://www.instagram.com/rayhanarkan/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/pahle"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/rayhanarkan/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
          <Projects />
          {/* <div className="grid lg:grid-cols-3 gap-20"> */}
            {/* <div className="lg:col-span-2"> */}
              <Resume />
            {/* </div> */}
            {/* <div>
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 h-full">
                <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  <BriefcaseIcon className="h-6 w-6 flex-none" />
                  <span className="ml-3">Work</span>
                </h2>
                <ol className="mt-6 space-y-4">
                  <li className="flex gap-4">React</li>
                  <li className="flex gap-4">NextJS</li>
                  <li className="flex gap-4">PHP</li>
                  <li className="flex gap-4">Laravel</li>
                  <li className="flex gap-4">C++</li>
                  <li className="flex gap-4">Dart</li>
                  <li className="flex gap-4">Flutter</li>
                  <li className="flex gap-4">Javascript</li>
                  <li className="flex gap-4">Javascript</li>
                </ol>
              </div>
            </div> */}
          {/* </div> */}
          <Contact />
        </div>
      </Container>
    </>
  )
}
