import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import Sparkles from '@/components/Sparkles'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/potrait.webp'
import fullSnackDevSticker from '@/images/stickers/full-snack-dev.svg'
import jsSticker from '@/images/stickers/js.svg'
import functionSticker from '@/images/stickers/function.svg'
import useStateSticker from '@/images/stickers/use-state.svg'
function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Pahle. I live in Bogor, Indonesia, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="flex justify-center lg:pl-20">
          <div className="relative max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={fullSnackDevSticker}
              alt="Full Snack Developer"
              width={500}
              height={500}
              className="absolute -right-4 -top-4 z-10 aspect-square w-20 -rotate-6 rounded-2xl lg:-right-10 lg:-top-6 lg:w-28"
            />
            <Image
              src={jsSticker}
              alt="JS"
              width={500}
              height={500}
              className="absolute -bottom-4 -left-4 z-10 aspect-square w-20 rotate-6 rounded-2xl lg:-bottom-6 lg:-left-10 lg:w-28"
            />
            <Image
              src={functionSticker}
              alt="Function"
              width={500}
              height={500}
              className="absolute -left-4 -top-4 z-10 aspect-square w-20 -rotate-6 rounded-2xl lg:-left-8 lg:-top-6 lg:w-28"
            />
            <Image
              src={useStateSticker}
              alt="Function"
              width={500}
              height={500}
              className="absolute -bottom-4 -right-4 z-10 aspect-square w-20 rotate-6 rounded-2xl lg:-bottom-6 lg:-right-8 lg:w-28"
            />
            <Image
              src={portraitImage}
              alt="Myself"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m{' '}
            <Sparkles>
              <h1 className="inline-block bg-gradient-to-b from-teal-100 from-0% to-teal-500 to-100% bg-clip-text font-extrabold text-transparent">
                Pahle
              </h1>
            </Sparkles>
            . I live in Bogor, Indonesia, where I design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <div>
              Like many, I have been passionate about{' '}
              <span className="text-lg font-extrabold text-[#7B5EA7]">
                making things
              </span>{' '}
              since childhood. However, my path to creation took a different
              route. In my early teens, my initial interest in technology leaned
              towards ethical hacking. I explored the world of exploiting
              vulnerabilities, but this{' '}
              <span className="text-lg font-extrabold text-[#DA3842]">
                {"'dark side'"}
              </span>{' '}
              of technology eventually lost its appeal.
            </div>
            <div>
              During my senior high school years, my focus shifted towards
              something more constructive:{' '}
              <span className="text-lg font-extrabold text-[#50B2E0]">
                web development
              </span>
              . This creative outlet for building things aligned better with my
              interests.
            </div>
            <div>
              I dove{' '}
              <span className="text-lg font-extrabold text-[#F38BA3]">
                headfirst
              </span>{' '}
              into the world of web development. I devoured online tutorials,
              experimented with different coding languages, and spent countless
              hours building simple websites. The thrill of creating something
              functional and visually appealing from scratch was immensely
              satisfying. As I honed my skills, I began to explore more complex
              concepts like web frameworks and back-end development. The process
              of learning and building fueled my{' '}
              <span className="text-lg font-extrabold text-[#0BA95B]">
                passion
              </span>
              , and I knew I had found my{' '}
              <span className="text-lg font-extrabold text-[#FC7428]">
                true calling
              </span>
              .
            </div>
            <div>
              Today, I am a{' '}
              <Sparkles>
                <h1 className="inline-block bg-gradient-to-b from-[#fff0cf] from-0% to-[#fcba28] to-100% bg-clip-text text-2xl font-extrabold text-transparent">
                  Full Stack Developer
                </h1>
              </Sparkles>
              , the bridge between imagination and reality. My creativity isn’t
              confined to a canvas or a notebook; it flourishes in the code I
              write. With every line, I transform ideas into vibrant,
              user-friendly websites. The thrill of seeing my vision come to
              life as a fully functional platform keeps me constantly pushing
              the boundaries of design and functionality.
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            <SocialLink
              href="https://www.instagram.com/rayhanarkan/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/pahle"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on Github
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/rayhanarkan/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:pahle.work@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              pahle.work@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
