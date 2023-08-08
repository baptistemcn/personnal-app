export interface CertificateProps {
  certificate?: Array<CertificateItem>;
}

export interface CertificateItem {
  inProgress?: boolean;
  link?: string;
  name?: string;
  icons?: Array<TechnologyItem>;
  testID?: string;
}

interface TechnologyItem {
  link?: string;
  name?: string;
  base64?: string;
}
