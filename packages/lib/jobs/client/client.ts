import { match } from 'ts-pattern';

import type { JobDefinition, TriggerJobOptions } from './_internal/job';
import type { BaseJobProvider as JobClientProvider } from './base';
import { InngestJobProvider } from './inngest';
import { LocalJobProvider } from './local';
import { TriggerJobProvider } from './trigger';

export class JobClient<T extends ReadonlyArray<JobDefinition> = []> {
  private _provider: JobClientProvider;

  public constructor(definitions: T) {
    this._provider = match(process.env.NEXT_PRIVATE_JOBS_PROVIDER)
      .with('inngest', () => InngestJobProvider.getInstance())
      .with('trigger', () => TriggerJobProvider.getInstance())
      .otherwise(() => LocalJobProvider.getInstance());

    definitions.forEach((definition) => {
      this._provider.defineJob(definition);
    });
  }

  public async triggerJob(options: TriggerJobOptions<T>) {
    return this._provider.triggerJob(options);
  }

  public getApiHandler() {
    return this._provider.getApiHandler();
  }
}
