export interface CertificateProps {
  certificate?: Array<CertificateItem>;
}

export interface CertificateItem {
  inProgress?: boolean;
  link?: string;
  name?: string;
  testID?: string;
}
