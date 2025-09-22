// File: src/components/pricing/Pricing.jsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import PricingCard from './PricingCard';
import { Switch } from "@/components/ui/switch";
function Pricing() {
  return (
    <Card className="max-w-6xl bg-transparent text-slate-200 border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-5xl pb-3 font-light leading-relaxed">
          Pricing
        </CardTitle>
        <CardDescription className="text-md">
          Choose the right plan to meet your seo <br />
          needs and start optimization today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='w-full flex items-center justify-center py-6'>
          <Switch checked/>
        </div>
        <div className="">
          <PricingCard />
        </div>
      </CardContent>
    </Card>
  );
}

export default Pricing
