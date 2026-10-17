export type ServiceCategory = 
  | 'home' 
  | 'auto' 
  | 'boat' 
  | 'rv' 
  | 'aircraft' 
  | 'ceramic' 
  | 'fleet';

export interface PricingPackage {
  id: string;
  name: string;
  priceDisplay: string;
  priceNumeric?: number;
  perFoot?: boolean;
  isQuoteOnly?: boolean;
  description?: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  highlights?: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: ServiceCategory;
  streetAddress: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  vehicleDetails?: string;
  message: string;
  preferredDate?: string;
  packageId?: string;
}
