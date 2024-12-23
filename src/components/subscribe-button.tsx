import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from './ui/button'

import { Mail, Phone, Slack, Code, MessageCircle, Rss } from 'lucide-react'
import { Text } from './ui/text'
import { Input } from './ui/input'

export const SubscribeButton: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm">Subscribe to updates</Button>
      </PopoverTrigger>
      <PopoverContent className="pt-0" sideOffset={6}>
        <Tabs defaultValue="mail">
          <TabsList className="mb-2">
            <TabsTrigger value="mail" className="pr-1">
              <Mail className="w-4 h-4 block mx-2" />
            </TabsTrigger>
            {/* <TabsTrigger value="phone" className="pr-1">
              <Phone className="w-4 h-4 block mx-2" />
            </TabsTrigger>
            <TabsTrigger value="slack" className="pr-1">
              <Slack className="w-4 h-4 block mx-2" />
            </TabsTrigger>
            <TabsTrigger value="code" className="pr-1">
              <Code className="w-4 h-4 block mx-2" />
            </TabsTrigger> */}
            <TabsTrigger value="message" className="pr-1">
              <MessageCircle className="w-4 h-4 block mx-2" />
            </TabsTrigger>
            <TabsTrigger value="rss" className="pr-1">
              <Rss className="w-4 h-4 block mx-2" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mail">
            <Text className="mb-3">
              Get email notifications whenever Vercel{' '}
              <span className="font-semibold">creates, updates</span> or{' '}
              <span className="font-semibold">resolves</span> an incident.
            </Text>

            <Input placeholder="" className="mb-3" label="Email address" />

            <Text size={10} color="gray-600">
              By subscribing you agree to our Privacy Policy. This site is
              protected by reCAPTCHA and the Google Privacy Policy and Terms of
              Service apply.
            </Text>
          </TabsContent>
          {/* <TabsContent value="phone">phone</TabsContent>
          <TabsContent value="slack">slack</TabsContent>
          <TabsContent value="code">code</TabsContent> */}
          <TabsContent value="message">
            <Text>
              Visit our{' '}
              <a
                href="https://vercel.com/help"
                target="_blank"
                className="text-blue-900 underline"
              >
                support site
              </a>
              .
            </Text>
          </TabsContent>
          <TabsContent value="rss">
            <Text>
              Get the{' '}
              <a
                href="https://www.vercel-status.com/history.atom"
                target="_blank"
                className="text-blue-900 underline"
              >
                Atom Feed
              </a>{' '}
              or{' '}
              <a
                href="https://www.vercel-status.com/history.rss"
                target="_blank"
                className="text-blue-900 underline"
              >
                RSS Feed
              </a>
            </Text>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}
