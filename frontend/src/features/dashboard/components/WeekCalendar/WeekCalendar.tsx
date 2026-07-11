import React from 'react';

import {

  Pressable,

  ScrollView,

} from 'react-native';

import {

  AppText,

} from '@/components/ui';

import { styles } from './WeekCalendar.styles';

import type {

  WeekCalendarProps,

} from './WeekCalendar.types';

export function WeekCalendar({

  days,

  selectedDay,

  onSelectDay,

}: WeekCalendarProps) {

  return (

    <ScrollView

      horizontal

      showsHorizontalScrollIndicator={false}

      contentContainerStyle={styles.content}

      style={styles.container}

    >

      {days.map((day) => {

        const selected = day.id === selectedDay;

        return (

          <Pressable

            key={day.id}

            onPress={() => onSelectDay(day.id)}

            style={[

              styles.item,

              selected && styles.selected,

            ]}

          >

            <AppText

              variant="small"

              color={selected ? 'white' : 'textSecondary'}

              style={styles.day}

            >

              {day.day}

            </AppText>

            <AppText

              variant="h3"

              color={selected ? 'white' : 'textPrimary'}

            >

              {day.date}

            </AppText>

          </Pressable>

        );

      })}

    </ScrollView>

  );

}