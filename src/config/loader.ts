import context from './additional_context';

class ConfigLoader {
  private readonly bqkey: string | null = null;
  private readonly additionalContext: string | null = null;

  constructor() {
    this.bqkey = null;
    this.additionalContext = context.join('\n');
  }

  public getBqKey(): string | null {
    return this.bqkey;
  }

  public getAdditionalContext(): string | null {
    return this.additionalContext;
  }
}

const configLoader = new ConfigLoader();
export default configLoader;
