import { Client, NumberOfRetries } from '@hubspot/api-client';

const DEAL_PROPERTIES = undefined; // TODO: replace with an array of properties to be fetched

export class DealAnalyzer {
  private hubspotApi: Client;

  constructor(hubspotApiKey: string) {
    this.hubspotApi = new Client({ apiKey: hubspotApiKey, numberOfApiCallRetries: NumberOfRetries.Two });
  }

  async fetchDealData(): Promise<DealAnalysisData> {
    const result: DealAnalysisData = {
      deals: []
    };
    const dealInfo = await this.hubspotApi.crm.deals.getAll(undefined, undefined, DEAL_PROPERTIES);
    return result;
  }

  async analyzeData(data: DealAnalysisData): Promise<AnalyzedDealData> {
    const result: AnalyzedDealData = {
      // populate
    };
    return result;
  }
}

export interface DealAnalysisData {
  deals: DealData[];
}

export interface DealData {

}

export interface AnalyzedDealData {

}