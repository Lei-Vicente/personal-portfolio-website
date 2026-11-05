import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

/**
 * CertificationsSection
 * Per Section 7 of specification:
 * Hidden on the public site until confirmed certification entries are added to src/data/certifications.ts.
 */
export const CertificationsSection: React.FC = () => {
  if (certificationsData.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-16 sm:py-24 border-t border-border-light dark:border-border-dark">
      <Container>
        <SectionHeading
          label="Credentials"
          title="Certifications & Accreditations"
          description="Verified professional certifications and technical achievements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl w-fit bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-foreground-light dark:text-foreground-dark mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark mb-2">
                  {cert.issuer} {cert.issuedAt ? `· ${cert.issuedAt}` : ''}
                </p>
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 border-t border-border-light dark:border-border-dark mt-4">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-light dark:text-accent-dark hover:underline"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
