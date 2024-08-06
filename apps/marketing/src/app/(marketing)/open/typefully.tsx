'use client';

import type { HTMLAttributes } from 'react';

import Link from 'next/link';

import { Trans } from '@lingui/macro';
import { FaXTwitter } from 'react-icons/fa6';

import { Button } from '@documenso/ui/primitives/button';

export type TypefullyProps = HTMLAttributes<HTMLDivElement>;

export const Typefully = ({ className, ...props }: TypefullyProps) => {
  return (
    <div className={className} {...props}>
      <div className="border-border flex flex-col justify-center rounded-2xl border p-6 pl-2 shadow-sm hover:shadow">
        <div className="mb-6 flex px-4">
          <h3 className="text-lg font-semibold">
            <Trans>Twitter Stats</Trans>
          </h3>
        </div>

        <div className="my-12 flex flex-col items-center gap-y-4 text-center">
          <FaXTwitter className="h-12 w-12" />
          <Link href="https://typefully.com/documenso/stats" target="_blank">
            <h1>
              <Trans>Documenso on X</Trans>
            </h1>
          </Link>
          <Button className="rounded-full" size="sm" asChild>
            <Link href="https://typefully.com/documenso/stats" target="_blank">
              <Trans>View all stats</Trans>
            </Link>
          </Button>
          <Button className="rounded-full bg-white" size="sm" asChild>
            <Link href="https://twitter.com/documenso" target="_blank">
              <Trans>Follow us on X</Trans>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
