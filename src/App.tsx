/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCategories } from './components/ServiceCategories';
import { SignsWhenYouNeed } from './components/SignsWhenYouNeed';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PricingCalculator } from './components/PricingCalculator';
import { ServiceDeepDive } from './components/ServiceDeepDive';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RedesignSpecModal } from './components/RedesignSpecModal';
import { ServiceCategory } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>();
  const [specModalOpen, setSpecModalOpen] = useState(false);

  const handleOpenBooking = (packageId?: string) => {
    setSelectedPackageId(packageId);
    setBookingModalOpen(true);
  };

  const handleSelectCategory = (category: ServiceCategory) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      
      {/* 1. Top Announcement & Utility Bar */}
      <AnnouncementBar onOpenSpecModal={() => setSpecModalOpen(true)} />

      {/* 2. Top Navigation (3-Zone Contract) */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* 3. Hero Section with Sector Switcher and 4-Column KPI Trust Strip */}
        <Hero
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Core Service Disciplines (Bento Grid) */}
        <ServiceCategories
          onSelectCategory={handleSelectCategory}
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. Diagnostic Signs: When Do You Need Detailing Services */}
        <SignsWhenYouNeed
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Interactive Before / After Visual Transformation Slider */}
        <BeforeAfterSlider />

        {/* 7. Interactive Transparent Pricing Engine */}
        <PricingCalculator
          onOpenBooking={handleOpenBooking}
          defaultSector={activeCategory}
        />

        {/* 8. Deep Service Features Catalog (100% Verbatim Preserved) */}
        <ServiceDeepDive
          activeSector={activeCategory}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 9. Standard Operating Procedures (6-Step Aircraft & 5-Step Ceramic Timeline) */}
        <ProcessTimeline
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 10. Why Choose Us & Quality Assurance */}
        <WhyChooseUsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 11. 7 Key Benefits of Hiring Ace Detailing in Orange Beach, AL */}
        <BenefitsGrid />

        {/* 12. High-Impact Call to Action Banner */}
        <CtaBanner
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 13. Comprehensive Contact Section with Original Address Fields */}
        <ContactSection />
      </main>

      {/* 14. Modern Footer with Verbatim Links & Legal Notice */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenBooking={() => handleOpenBooking()}
        onOpenSpecModal={() => setSpecModalOpen(true)}
      />

      {/* 15. Interactive Appointment & Quote Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedPackageId={selectedPackageId}
      />

      {/* 16. Comprehensive UI/UX Redesign Blueprint & Strategy Modal */}
      <RedesignSpecModal
        isOpen={specModalOpen}
        onClose={() => setSpecModalOpen(false)}
      />

    </div>
  );
}
