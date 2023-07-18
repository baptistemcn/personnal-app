export interface CertificateProps {
  certificate?: Array<CertificateItem>;
}

interface CertificateItem {
  inProgress?: boolean;
  link?: string;
  name?: string;
  testID?: string;
}
