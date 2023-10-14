export interface DeviceValue {
  name: string;
  IPSend?: string;
  portSend?: string;
  IPReceive?: string;
  protReceive?: string;
  description?: string;
}

export interface ParadigmValue {
  name: string;
  time: number;
  description: string;
}

export interface DataInfo {
  key: string;
  name: string;
  IPSend?: string;
  portSend?: string;
  IPReceive?: string;
  protReceive?: string;
  description?: string;
}


export interface TestNeuroScan {
    type: string,
    ip: string,
    port: string
}

export interface rsvpInfo {
  targetType: string;
  frequent: number;
  algorithm: string;
}
