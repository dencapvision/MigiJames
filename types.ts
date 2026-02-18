
export enum AnalysisType {
  MIGI = 'MIGI',
  JAMES = 'JAMES',
  SYNERGY = 'SYNERGY'
}

export interface SectionContent {
  title: string;
  items: string[];
}

export interface AstralBlueprint {
  planet: string;
  sign: string;
  house: string;
  visualization: string;
}

export interface DiamondAlchemyStep {
  title: string;
  description: string;
  subItems: string[];
}

export interface SynergyContent {
  connectionType: string;
  description: string;
  steps: SectionContent[];
  diamondAlchemy: {
    title: string;
    steps: DiamondAlchemyStep[];
  };
  dualPower: {
    migi: string;
    james: string;
    result: string;
  };
}

export interface PersonalityProfile {
  name: string;
  year: string;
  decoding: SectionContent[];
  strategy: SectionContent[];
  astral: AstralBlueprint;
  wisdom: string;
  jewelryAdvice?: SectionContent[];
  investmentAdvice?: SectionContent[];
  missionAdvice?: SectionContent[];
  imageUrl?: string;
}
