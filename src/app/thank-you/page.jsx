import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Your message has been delivered.',
  description: 'Thanks for reaching out. I’ll get back to you as soon as I can.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thank you for your message."
      intro="I’ll get back to you as soon as I can. In the meantime, feel free to check out other sections of my site."
    />
  )
}
