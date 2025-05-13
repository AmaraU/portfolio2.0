import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGmail,

} from "@tabler/icons-react";
import Link from "next/link";

function Contact() {
  const contactlinks = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="hover:text-accent h-6 w-6 text-gray-400 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/amaraude/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="hover:text-accent h-6 w-6 text-gray-400 dark:text-neutral-300" />
      ),
      href: "https://github.com/AmaraU",
    },
    {
      title: "E-mail",
      icon: (
        <IconBrandGmail className="hover:text-accent h-6 w-6 text-gray-400 dark:text-neutral-300" />
      ),
      href: "mmailto:amaraude01@gmail.com",
    },
  ];

  return (
    <div id="contact" className="hover:cursor-pointer lg:px-40 sm:px-9 py-8 mt-14">
      <div className="flex flex-col sm:flex-row justify-between items-center">

        <div className="flex flex-row items-center space-x-4">
          {contactlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-neutral-300 hover:shadow-md hover:border-accent"
              aria-label={link.title}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <div className="mb-4 sm:mb-0 text-right">
          <span className="text-gray-500 text-sm">Reach out to me <span aria-hidden="true">→</span></span> <br />
          <Link href="mailto:amaraude01@gmail.com">
            <span className="text-xl hover:underline">amaraude01@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact