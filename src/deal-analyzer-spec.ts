import 'mocha';
import * as assert from 'assert';
import * as path from 'path';
import * as fs from 'fs';
import { DealAnalyzer } from './deal-analyzer';

function fetchJson(pathname: string): any {
  const contents = fs.readFileSync(pathname, 'utf-8');
  return JSON.parse(contents);
}

const config = fetchJson(path.join(__dirname, '../config.json')) as DealAnalyzerConfig;

describe('Verify deal fetch data', async () => {
  it('should fetch data from Hubspot analyze it', async () => {
    const analyzer = new DealAnalyzer(config.hubspotApiKey);
    const data = await analyzer.fetchDealData();
    const analysis = await analyzer.analyzeData(data);
  });
});

export interface DealAnalyzerConfig {
  hubspotApiKey: string;
}