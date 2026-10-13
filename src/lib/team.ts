
export interface TeamProfile {
  id: string;
  department: string;
  name: string | null;
  jobTitle: string | null;
  biography: string | null;
  photo: string | null;
  contact: string | null;
  contactApproved: boolean;
}

export const teamProfiles: TeamProfile[] = [
  {
    id: "managing-director",
    department: "Management Team",
    name: "M. Brahmananda Reddy",
    jobTitle: "Managing Director",
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "slv-narayana-reddy",
    department: "Management Team",
    name: "SLV Narayana Reddy",
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "k-trinatha-reddy",
    department: "Management Team",
    name: "K. Trinatha Reddy",
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "k-subba-reddy",
    department: "Management Team",
    name: "K. Subba Reddy",
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },

  // Add your next team members here.
  {
    id: "team-member-5",
    department: "Management Team",
    name: null,
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "team-member-6",
    department: "Sales & Business Development",
    name: null,
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "team-member-7",
    department: "Sales & Business Development",
    name: null,
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "team-member-8",
    department: "Customer Support",
    name: null,
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "team-member-9",
    department: "Operations & Dispatch",
    name: null,
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
  {
    id: "team-member-10",
    department: "Operations & Dispatch",
    name: null,
    jobTitle: null,
    biography: null,
    photo: null,
    contact: null,
    contactApproved: false,
  },
];

export function publishedContact(
  profile: TeamProfile
): string | null {
  return profile.contactApproved
    ? profile.contact
    : null;
}

// Only show profiles with a name.
export const visibleTeamProfiles = teamProfiles.filter(
  (profile) => profile.name?.trim()
);

