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
  name?: string;
  source?: string;
}
