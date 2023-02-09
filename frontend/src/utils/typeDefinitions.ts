export type Option = {
  adult: number;
  children: number;
  room: number;
};

export type SearchOptionsProps = {
  openDate: boolean;
  date: [
    {
      startDate: Date;
      endDate: Date;
      key: string;
    }
  ];
  openOptions: boolean;
  options: Option;
  handleSearch: () => void;
  setDate: (date: {}) => void;
  setOpenOption: (openOptions: boolean) => void;
  setDestination: (destination: string) => void;
  setOpenDate: (openDate: boolean) => void;
  handleOption: (name: string, operation: string) => void;
};

export type PersonNumberProps = {
  type: number;
  name: string;
  handleOption: (name: string, operation: string) => void;
};

export type Data = {
  id: string;
  name: string;
  city: string;
  cheapestPrice: number;
  rating: number;
  photos: string[];
};
