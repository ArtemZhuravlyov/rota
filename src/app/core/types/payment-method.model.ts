export type PaymentMethodResponse = {
  paymentMethods: PaymentMethod[];
  totalCount: number;
};

export type PaymentMethod = {
  countryId: string;
  description: string;
  id: string;
  name: string;
};
