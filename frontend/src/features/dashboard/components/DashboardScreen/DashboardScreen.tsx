import React, {

    useState,
  
  } from 'react';
  
  import {
  
    ScrollView,
  
  } from 'react-native';
  
  import {
  
    AppScreen,
  
  } from '@/components/ui';
  
  import {
  
    BottomTabs,
  
  } from '../BottomTabs';
  
  import {
  
    DashboardHeader,
  
  } from '../DashboardHeader';
  
  import {
  
    PaymentProgress,
  
  } from '../PaymentProgress';
  
  import {
  
    RecentPayment,
  
  } from '../RecentPayment';
  
  import {
  
    RecordPaymentButton,
  
  } from '../RecordPaymentButton';
  
  import {
  
    StatsGrid,
  
  } from '../StatsGrid';
  
  import {
  
    WeekCalendar,
  
  } from '../WeekCalendar';
  
  import {
  
    DASHBOARD_DATA,
  
  } from './DashboardScreen.constants';
  
  import {
  
    styles,
  
  } from './DashboardScreen.styles';
  
  import type {
  
    DashboardScreenProps,
  
  } from './DashboardScreen.types';

  const [selectedDay, setSelectedDay] = useState(
    DASHBOARD_DATA.week[0].id,
  );
  
  export function DashboardScreen({}: DashboardScreenProps) {
  
    const [activeTab, setActiveTab] = useState('dashboard');
  
    return (
  
      <AppScreen style={styles.screen}>
  
        <DashboardHeader
  
          greeting={DASHBOARD_DATA.greeting}
  
          userName={DASHBOARD_DATA.userName}

          chamaName="Pamoja Chama"

          notificationCount={3}
          onNotificationPress={() => {}}
          onProfilePress={() => {}}
  
        />
  
        <ScrollView
  
          contentContainerStyle={styles.content}
  
          showsVerticalScrollIndicator={false}
  
        >
  
          <WeekCalendar 
            days={DASHBOARD_DATA.week}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
  
          <PaymentProgress
  
            title="Monthly Contribution"
  
            amount={DASHBOARD_DATA.monthContribution}
  
            target={DASHBOARD_DATA.monthlyTarget}
  
            membersPaid={DASHBOARD_DATA.membersPaid}
  
            totalMembers={DASHBOARD_DATA.totalMembers}
  
            onRecordPayment={() => {}}
  
          />
  
          <StatsGrid 
            stats={DASHBOARD_DATA.stats}
          />
  
          <RecentPayment
  
            payments={DASHBOARD_DATA.recentPayments}
  
          />
  
        </ScrollView>
  
        <RecordPaymentButton
  
          onPress={() => {}}
  
        />
  
        <BottomTabs
  
          activeTab={activeTab}
  
          onTabPress={setActiveTab}
  
        />
  
      </AppScreen>
  
    );
  
  }