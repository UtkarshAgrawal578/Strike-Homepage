import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEYS = {
  END_TIME: 'strike_monsoon_sale_end_time',
  UNLOCKED: 'strike_monsoon_sale_unlocked',
  APPLIED: 'strike_monsoon_sale_applied',
};

const DEFAULT_DURATION_HOURS = 48;
const COUPON_CODE = 'MONSOON40';
const DISCOUNT_PERCENT = 40;

const SaleContext = createContext(null);

export const SaleProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.UNLOCKED) === 'true';
  });
  const [isCouponApplied, setIsCouponApplied] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.APPLIED) === 'true';
  });
  const [hasInteracted, setHasInteracted] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize or retrieve persistent target end time
  const [targetEndTime, setTargetEndTime] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.END_TIME);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed)) {
        return parsed;
      }
    }
    // Set 48 hours from current timestamp
    const newTarget = Date.now() + DEFAULT_DURATION_HOURS * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEYS.END_TIME, newTarget.toString());
    return newTarget;
  });

  const [remainingTime, setRemainingTime] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Calculate remaining countdown based on persistent timestamp
  const calculateRemaining = useCallback((targetMs) => {
    const now = Date.now();
    const diff = targetMs - now;

    if (diff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds, isExpired: false };
  }, []);

  // Live timer interval
  useEffect(() => {
    const updateTime = () => {
      const computed = calculateRemaining(targetEndTime);
      setRemainingTime(computed);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetEndTime, calculateRemaining]);

  // ALWAYS open the End of Monsoon Sale popup whenever the webpage is loaded / refreshed
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const clearToast = () => {
    setToastMessage(null);
  };

  const openSaleModal = () => {
    setHasInteracted(true);
    setIsModalOpen(true);
  };

  const closeSaleModal = () => {
    setIsModalOpen(false);
  };

  const unlockOffer = () => {
    setIsUnlocked(true);
    localStorage.setItem(STORAGE_KEYS.UNLOCKED, 'true');
    showToast('🌧️ End of Monsoon Sale Unlocked! 40% Discount Ready');
  };

  const copyAndApplyCoupon = () => {
    if (remainingTime.isExpired) {
      showToast('⚠️ The End of Monsoon Sale window has expired.');
      return;
    }

    navigator.clipboard.writeText(COUPON_CODE).catch(() => {});
    setIsCouponApplied(true);
    setIsUnlocked(true);
    localStorage.setItem(STORAGE_KEYS.UNLOCKED, 'true');
    localStorage.setItem(STORAGE_KEYS.APPLIED, 'true');
    showToast(`🎉 Coupon "${COUPON_CODE}" copied & 40% Monsoon discount applied!`);
  };

  const removeCoupon = () => {
    setIsCouponApplied(false);
    localStorage.removeItem(STORAGE_KEYS.APPLIED);
    showToast('Coupon removed. Standard pricing restored.');
  };

  const forceExpireTimer = () => {
    const pastTime = Date.now() - 1000;
    setTargetEndTime(pastTime);
    localStorage.setItem(STORAGE_KEYS.END_TIME, pastTime.toString());
    setIsCouponApplied(false);
    localStorage.removeItem(STORAGE_KEYS.APPLIED);
    showToast('⏱️ Timer set to 00:00:00 (Expired Offer State)');
  };

  const resetTimer = (hours = DEFAULT_DURATION_HOURS) => {
    const newTarget = Date.now() + hours * 60 * 60 * 1000;
    setTargetEndTime(newTarget);
    localStorage.setItem(STORAGE_KEYS.END_TIME, newTarget.toString());
    showToast(`🔄 Timer refreshed: ${hours} hours remaining.`);
  };

  return (
    <SaleContext.Provider
      value={{
        isActive: !remainingTime.isExpired,
        isModalOpen,
        isUnlocked,
        couponCode: COUPON_CODE,
        discountPercentage: DISCOUNT_PERCENT,
        targetEndTime,
        remainingTime,
        isCouponApplied: !remainingTime.isExpired && isCouponApplied,
        hasInteracted,
        openSaleModal,
        closeSaleModal,
        unlockOffer,
        copyAndApplyCoupon,
        removeCoupon,
        forceExpireTimer,
        resetTimer,
        toastMessage,
        clearToast,
        showToast,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};

export const useSale = () => {
  const context = useContext(SaleContext);
  if (!context) {
    throw new Error('useSale must be used within a SaleProvider');
  }
  return context;
};
