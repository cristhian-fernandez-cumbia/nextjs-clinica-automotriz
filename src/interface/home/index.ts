export interface AttentionInfo {
  idAttention: number;
  urlImagen: string;
  description: string;
  title: string;
  subtitle: string;
  active: boolean;
  color: string;
}

export interface Local {
  idLocal: number;
  urlImagen: string;
  description: string;
  district: string;
  address: string;
  horary: string[];
  phone: string;
  cellphone: string;
  active: boolean;
}