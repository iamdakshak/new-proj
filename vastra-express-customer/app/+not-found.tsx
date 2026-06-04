import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Typography variant="display-sm" className="text-center mb-4">
        Page Not Found
      </Typography>
      <Typography variant="body-md" className="text-text-tertiary text-center mb-8">
        This page doesn't exist.
      </Typography>
      <Button label="Go Home" onPress={() => router.replace('/(tabs)/home')} />
    </View>
  );
}
