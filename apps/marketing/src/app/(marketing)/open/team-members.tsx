import type { HTMLAttributes } from 'react';

import { Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import { cn } from '@documenso/ui/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@documenso/ui/primitives/table';

import { TEAM_MEMBERS } from './data';

export type TeamMembersProps = HTMLAttributes<HTMLDivElement>;

export const TeamMembers = ({ className, ...props }: TeamMembersProps) => {
  const { _ } = useLingui();

  return (
    <div className={cn('flex flex-col', className)} {...props}>
      <h2 className="px-4 text-2xl font-semibold">
        <Trans>Team</Trans>
      </h2>

      <div className="border-border mt-2.5 flex-1 rounded-2xl border shadow-sm hover:shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Trans>Name</Trans>
              </TableHead>
              <TableHead>
                <Trans>Role</Trans>
              </TableHead>
              <TableHead>
                <Trans>Salary</Trans>
              </TableHead>
              <TableHead>
                <Trans>Engagement</Trans>
              </TableHead>
              <TableHead>
                <Trans>Location</Trans>
              </TableHead>
              <TableHead className="w-[100px] text-right">
                <Trans>Join Date</Trans>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TEAM_MEMBERS.map((member) => (
              <TableRow key={member.name}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>

                <TableCell>
                  {member.salary.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                  })}
                </TableCell>
                <TableCell>{_(member.engagement)}</TableCell>
                <TableCell>{member.location}</TableCell>
                <TableCell className="text-right">{member.joinDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
