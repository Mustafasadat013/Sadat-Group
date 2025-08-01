'use client';

import React from 'react';
import Link from 'next/link';
import { businesses } from '@/data/businesses';
import BusinessLandingPage from '@/components/business/BusinessLandingPage';
import { BusinessType } from '@/types';

interface BusinessPageProps {
  params: Promise<{
    businessId: BusinessType;
  }>;
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const [businessId, setBusinessId] = React.useState<BusinessType | null>(null);

  React.useEffect(() => {
    params.then(({ businessId }) => {
      setBusinessId(businessId);
    });
  }, [params]);

  if (!businessId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Find the business
  const business = businesses.find(b => b.id === businessId);

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Business Not Found</h1>
          <p className="text-gray-600 mb-6">The requested business could not be found.</p>
          <Link
            href="/businesses"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            View All Businesses
          </Link>
        </div>
      </div>
    );
  }

  return <BusinessLandingPage business={business} />;
}