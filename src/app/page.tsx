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
      <div className="mb-10">
        <IntroBanner />
      </div>

      <div className="space-y-4 pb-4">
        <StatusSection status="operational" title="API" />
        <StatusSection
          status="operational"
          title="Build & Deploy"
          sections={[
            { title: 'Builds', status: 'operational' },
            { title: 'npm Registry', status: 'operational' },
          ]}
        />
        <StatusSection
          status="operational"
          title="CI/CD"
          sections={[
            { title: 'Deploy Hooks', status: 'operational' },
            { title: 'Git Integrations', status: 'operational' },
            { title: 'Integration Webhooks', status: 'operational' },
          ]}
        />
        <StatusSection
          status="operational"
          title="Dashboard"
          sections={[
            { title: 'Dashboard', status: 'operational' },
            { title: 'Support Center', status: 'operational' },
          ]}
        />
        <StatusSection status="operational" title="Data Cache" />
        <StatusSection status="operational" title="DNS" />
        <StatusSection status="operational" title="Domain Registration" />
        <StatusSection status="operational" title="Edge Functions" />
        <StatusSection status="operational" title="Edge Middleware" />
        <StatusSection
          status="error"
          title="Edge Network"
          sections={[
            { title: 'ARN1 - Stockholm, Sweden', status: 'operational' },
            { title: 'BOM1 - Mumbai, India', status: 'operational' },
            { title: 'CDG1 - Paris, France, Europe', status: 'operational' },
            { title: 'CLE1 - Cleveland, East US', status: 'operational' },
            {
              title: 'CPT1 - Cape Town, South Africa',
              status: 'operational',
            },
            { title: 'DUB1 - Dublin, Ireland', status: 'operational' },
            {
              title: 'FRA1 - Frankfurt, Germany, Europe',
              status: 'operational',
            },
            { title: 'GRU1 - São Paulo, Brazil', status: 'operational' },
            { title: 'HKG1 - Hong Kong', status: 'operational' },
            { title: 'HND1 - Tokyo, Japan', status: 'operational' },
            { title: 'IAD1 - Washington DC, USA', status: 'error' },
            { title: 'ICN1 - Seoul, South Korea', status: 'operational' },
            { title: 'KIX1 - Osaka, Japan', status: 'operational' },
            { title: 'LHR1 - London, UK', status: 'operational' },
            { title: 'PDX1 - Portland, West US', status: 'operational' },
            { title: 'SFO1 - San Francisco, CA, USA', status: 'operational' },
            { title: 'SIN1 - Singapore', status: 'operational' },
            { title: 'SYD1 - Sydney', status: 'operational' },
          ]}
        />
        <StatusSection status="operational" title="Image Optimization" />
        <StatusSection status="issue" title="Logs" />
        <StatusSection status="operational" title="Log Drains" />
        <StatusSection status="operational" title="Remote Caching" />
        <StatusSection status="operational" title="SAML Single Sign-On" />
        <StatusSection status="operational" title="Serverless Functions" />
        <StatusSection
          status="operational"
          title="Secure Compute"
          sections={[
            { title: 'Builds', status: 'operational' },
            { title: 'Serverless Functions', status: 'operational' },
          ]}
        />
        <StatusSection status="operational" title="Speed Insights" />
        <StatusSection status="operational" title="SSL Certificates" />
        <StatusSection
          status="issue"
          title="Storage"
          sections={[
            { title: 'Blob', status: 'issue' },
            { title: 'Edge Config', status: 'issue' },
            { title: 'KV', status: 'issue' },
            { title: 'Postgres', status: 'issue' },
          ]}
        />
        <StatusSection status="operational" title="Web Analytics" />
      </div>
    </div>
  )
}

const StatusSection = ({
  title,
  sections,
  status,
}: {
  title: string
  status: 'operational' | 'issue' | 'error'
  sections?: { title: string; status: 'operational' | 'issue' | 'error' }[]
}) => {
  return (
    <div className="border-t">
      <Accordion.Root className="border-b" type="single" collapsible>
        <Accordion.Item value="item-1" disabled={!sections}>
          <Accordion.Header>
            <Accordion.Trigger className="flex py-6 px-4 text-left w-full justify-between [&[data-state=open]_svg]:rotate-180">
              <div>
                <div className="flex items-center gap-2 h-10">
                  <Text size={24} className="mb-1">
                    {title}
                  </Text>

                  {sections && (
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                  )}
                </div>

                <Text size={14} color="gray-700">
                  Last 31 days
                </Text>
              </div>

              <Badge
                variant={
                  status === 'operational'
                    ? 'blue-subtle'
                    : status === 'issue'
                    ? 'amber-subtle'
                    : 'red-subtle'
                }
              >
                {status}
              </Badge>
            </Accordion.Trigger>
          </Accordion.Header>
          {sections && (
            <Accordion.Content className="pb-2 px-4 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="space-y-0 divide-y">
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="flex items-center gap-2 h-10"
                  >
                    <Text size={16}>{section.title}</Text>
                    <Badge
                      variant={
                        section.status === 'operational'
                          ? 'blue-subtle'
                          : section.status === 'issue'
                          ? 'amber-subtle'
                          : 'red-subtle'
                      }
                      size="sm"
                    >
                      {section.status}
                    </Badge>
                  </div>
                ))}

                {/* <div className="flex items-center gap-2 h-10">
                <Text size={16}>Deploy Hooks</Text>
                <Badge variant="blue-subtle" size="sm">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center gap-2 h-10">
                <Text size={16}>Git Integrations</Text>
                <Badge variant="red-subtle" size="sm">
                  Errors
                </Badge>
              </div>
              <div className="flex items-center gap-2 h-10">
                <Text size={16}>Integration Webhooks</Text>
                <Badge variant="amber-subtle" size="sm">
                  Issue
                </Badge>
              </div> */}
              </div>
            </Accordion.Content>
          )}
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}

{
  /* <div className="my-10 border-t">
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
            </div> 
          </div>
            

          <div className="grid grid-cols-12 divide-x border-b border-b-border divide-border">
            {Array(12)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="aspect-square" />
              ))}
          </div>
        </div> */
}
