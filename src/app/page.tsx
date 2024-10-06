import { IntroBanner } from '@/components/intro-banner'
import { Badge } from '@/components/ui/badge'
import { Note } from '@/components/ui/note'
import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const status = Array(31)
  .fill(null)
  .map(() => Math.random() < 0.8)

export default function Home() {
  return (
    <div className="max-w-5xl min-h-[calc(100vh-64px)] mx-auto border-border border-x">
      <div className="">
        {/* <div className="p-4">
          <Note fill type="success" size="large">
            All Systems Operational
          </Note>
        </div> */}

        <IntroBanner />

        <div className="my-10 border-t">
          <div className="grid grid-cols-12 divide-x border-b border-b-border divide-border">
            {Array(12)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="aspect-square" />
              ))}
          </div>
          <div className="border-b p-4">
            <Text size={24} className="mb-1">
              Api
            </Text>

            <Text size={14} color="gray-700" className="mb-4">
              Last 31 days
            </Text>

            <div className="w-full max-w-2xl flex">
              {status.map((ok, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex-1 aspect-square mr-[1px]',
                    ok ? 'bg-green-600' : 'bg-red-600'
                  )}
                />
              ))}
            </div>

            {/* <div className="w-full h-3 max-w-3xl rounded overflow-hidden flex">
              {status.map((ok, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex-1 h-full mr-[1px]',
                    ok ? 'bg-green-600' : 'bg-red-600'
                  )}
                />
              ))}
            </div> */}
          </div>

          <div className="grid grid-cols-12 divide-x border-b border-b-border divide-border">
            {Array(12)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="aspect-square" />
              ))}
          </div>
        </div>

        <StatusSection title="Data cache" />
        <StatusSection title="Data cache" />
        <StatusSection title="Data cache" />
        <StatusSection title="Data cache" />
        <StatusSection title="Data cache" />
        <StatusSection title="Data cache" />
        <StatusSection title="Data cache" />
      </div>
    </div>
  )
}

const StatusSection = ({ title }: { title: string }) => {
  return (
    <div className="mt-10 border-t">
      <Accordion.Root className="border-b p-4" type="single" collapsible>
        <Accordion.Item className="" value="item-1">
          <Accordion.Header>
            <Accordion.Trigger className="flex text-left w-full justify-between [&[data-state=open]_svg]:rotate-180">
              <div className="">
                <div className="flex items-center gap-2 h-10">
                  <Text size={24} className="mb-1">
                    {title}
                  </Text>

                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                </div>

                <Text size={14} color="gray-700" className="">
                  Last 31 days
                </Text>
              </div>
              <div className="">
                <Badge variant="blue-subtle">Operational</Badge>
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pt-4 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="space-y-0 divide-y">
              <div className="flex items-center gap-2 h-10">
                <Text size={16}>Deploy Hooks</Text>
                <Badge variant="blue-subtle" size="md">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center gap-2 h-10">
                <Text size={16}>Git Integrations</Text>
                <Badge variant="red-subtle" size="md">
                  Errors
                </Badge>
              </div>
              <div className="flex items-center gap-2 h-10">
                <Text size={16}>Integration Webhooks</Text>
                <Badge variant="amber-subtle" size="md">
                  Issue
                </Badge>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      {/*      
      <div className="border-b p-4">
        <div className="flex justify-between">
          <div className="">
            <Text size={24} className="mb-1">
              {title}
            </Text>

            <Text size={14} color="gray-700" className="">
              Last 31 days
            </Text>
          </div>
          <div className="">
            <Badge variant="blue-subtle">Operational</Badge>
          </div>
        </div>
       
      </div> */}
    </div>
  )
}
