export interface AttentionInfoProps {
  idAttention: number;
  urlImagen: string;
  urlVideo: string;
  description: string;
  title: string;
  subtitle: string;
  active: boolean;
  color: string;
}

export interface Local {
  idLocal: number;
  urlImagen: string;
  urlVideo: string;
  description: string;
  district: string;
  address: string;
  horary: string[];
  phone: string;
  cellphone: string;
  active: boolean;
}

export interface Service {
  idService: number;
  name: string;
  urlImagen: string;
  active: boolean;
}

export interface ServiceDetail {
  idServiceDetail: number;
  name: string;
  fullname: string;
  idService: number;
  urlImagen: string;
  active: boolean;
  label: string;
  bgColor: string;
  description: string;
  main: boolean;
}

export interface Vehiculo {
  cliente: string;
  nombre: string;
  placaVehiculo: string;
  marca: string;
  modelo: string;
  ultimaVisita: string;
  ano: string;
  totalServicios: string;
  telefono: string;
  servicioFullname: string;
  servicio: string;
  asKmInicial: string;
}