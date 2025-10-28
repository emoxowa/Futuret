export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'infrastructure' | 'security' | 'software';
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Dell Technologies',
    logo: '/partners/dell.svg',
    category: 'infrastructure'
  },
  {
    id: '2',
    name: 'HPE',
    logo: '/partners/hpe.svg',
    category: 'infrastructure'
  },
  {
    id: '3',
    name: 'Cisco',
    logo: '/partners/cisco.svg',
    category: 'infrastructure'
  },
  {
    id: '4',
    name: 'VMware',
    logo: '/partners/vmware.svg',
    category: 'software'
  },
  {
    id: '5',
    name: 'Microsoft',
    logo: '/partners/microsoft.svg',
    category: 'software'
  },
  {
    id: '6',
    name: 'Kaspersky',
    logo: '/partners/kaspersky.svg',
    category: 'security'
  },
  {
    id: '7',
    name: 'Huawei',
    logo: '/partners/huawei.svg',
    category: 'infrastructure'
  },
  {
    id: '8',
    name: 'IBM',
    logo: '/partners/ibm.svg',
    category: 'infrastructure'
  }
];
