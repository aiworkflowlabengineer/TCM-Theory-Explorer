
export enum AppView {
  EXPLORER = 'explorer',
  CHAT = 'chat',
  GROUNDING = 'grounding',
  IMAGE_EDITOR = 'image-editor',
  VEO_VIDEO = 'veo-video',
  LIVE_VOICE = 'live-voice',
  ANALYSIS = 'analysis'
}

export interface TCMResult {
  explanation: string;
  symptoms: string[];
  elementsOrgans: string[];
  lifestyleTips: string[];
  groundingSources?: Array<{ uri: string; title: string }>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
