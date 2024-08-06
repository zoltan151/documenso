'use client';

import Image from 'next/image';
import Link from 'next/link';

import { msg } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { LiaDiscord } from 'react-icons/lia';
import { LuGithub } from 'react-icons/lu';

import LogoImage from '@documenso/assets/logo.png';
import { Sheet, SheetContent } from '@documenso/ui/primitives/sheet';

export type MobileNavigationProps = {
  isMenuOpen: boolean;
  onMenuOpenChange?: (_value: boolean) => void;
};

export const MENU_NAVIGATION_LINKS = [
  {
    href: '/pricing',
    text: msg`Pricing`,
  },
  {
    href: 'https://documen.so/docs-nav',
    text: msg`Documentation`,
  },
  {
    href: '/singleplayer',
    text: 'Singleplayer',
  },
  {
    href: '/blog',
    text: msg`Blog`,
  },
  {
    href: '/open',
    text: msg`Open Startup`,
  },
  {
    href: 'https://status.documenso.com',
    text: msg`Status`,
  },
  {
    href: 'mailto:support@documenso.com',
    text: msg`Support`,
    target: '_blank',
  },
  {
    href: '/privacy',
    text: msg`Privacy`,
  },
  {
    href: 'https://app.documenso.com/signup?utm_source=marketing-header',
    text: msg`Sign up`,
  },
  {
    href: 'https://app.documenso.com/signin?utm_source=marketing-header',
    text: msg`Sign in`,
  },
];

export const MobileNavigation = ({ isMenuOpen, onMenuOpenChange }: MobileNavigationProps) => {
  const { _ } = useLingui();

  const shouldReduceMotion = useReducedMotion();

  const handleMenuItemClick = () => {
    onMenuOpenChange?.(false);
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={onMenuOpenChange}>
      <SheetContent className="w-full max-w-[400px]">
        <Link href="/" className="z-10" onClick={handleMenuItemClick}>
          <Image
            src={LogoImage}
            alt="Documenso Logo"
            className="dark:invert"
            width={170}
            height={25}
          />
        </Link>

        <motion.div
          className="mt-12 flex w-full flex-col items-start gap-y-4"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.03,
          }}
        >
          {MENU_NAVIGATION_LINKS.map(({ href, text, target }) => (
            <motion.div
              key={href}
              variants={{
                initial: {
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : 100,
                },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'backInOut',
                  },
                },
              }}
            >
              <Link
                className="text-foreground hover:text-foreground/80 text-2xl font-semibold"
                href={href}
                onClick={() => handleMenuItemClick()}
                target={target}
              >
                {typeof text === 'string' ? text : _(text)}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mx-auto mt-8 flex w-full flex-wrap items-center gap-x-4 gap-y-4 ">
          <Link
            href="https://twitter.com/documenso"
            target="_blank"
            className="text-foreground hover:text-foreground/80"
          >
            <FaXTwitter className="h-6 w-6" />
          </Link>

          <Link
            href="https://github.com/documenso/documenso"
            target="_blank"
            className="text-foreground hover:text-foreground/80"
          >
            <LuGithub className="h-6 w-6" />
          </Link>

          <Link
            href="https://documen.so/discord"
            target="_blank"
            className="text-foreground hover:text-foreground/80"
          >
            <LiaDiscord className="h-7 w-7" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
