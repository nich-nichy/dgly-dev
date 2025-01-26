import { Workflow } from 'lucide-react'

export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
}))

export const products = [
    {
        title: 'Moonbeam',
        link: 'https://gomoonbeam.com',
        thumbnail: '/p1.png',
    },
    {
        title: 'Cursor',
        link: 'https://cursor.so',
        thumbnail: '/p2.png',
    },
    {
        title: 'Rogue',
        link: 'https://userogue.com',
        thumbnail: '/p3.png',
    },

    {
        title: 'Editorially',
        link: 'https://editorially.org',
        thumbnail: '/p4.png',
    },
    {
        title: 'Editrix AI',
        link: 'https://editrix.ai',
        thumbnail: '/p5.png',
    },
    {
        title: 'Pixel Perfect',
        link: 'https://app.pixelperfect.quest',
        thumbnail: '/p6.png',
    },

    {
        title: 'Algochurn',
        link: 'https://algochurn.com',
        thumbnail: '/p1.png',
    },
    {
        title: 'Aceternity UI',
        link: 'https://ui.aceternity.com',
        thumbnail: '/p2.png',
    },
    {
        title: 'Tailwind Master Kit',
        link: 'https://tailwindmasterkit.com',
        thumbnail: '/p3.png',
    },
    {
        title: 'SmartBridge',
        link: 'https://smartbridgetech.com',
        thumbnail: '/p4.png',
    },
    {
        title: 'Renderwork Studio',
        link: 'https://renderwork.studio',
        thumbnail: '/p5.png',
    },

    {
        title: 'Creme Digital',
        link: 'https://cremedigital.com',
        thumbnail: '/p6.png',
    },
    {
        title: 'Golden Bells Academy',
        link: 'https://goldenbellsacademy.com',
        thumbnail: '/p1.png',
    },
    {
        title: 'Invoker Labs',
        link: 'https://invoker.lol',
        thumbnail: '/p2.png',
    },
    {
        title: 'E Free Invoice',
        link: 'https://efreeinvoice.com',
        thumbnail: '/p3.png',
    },
]

// export const EditorCanvasDefaultCardTypes = {
//   Email: {
//     description: 'Send forth a missive to the heart of thine audience, conveying words of import and grace.',
//     type: 'Action'
//   },
//   Condition: {
//     description: 'A fork in the path, where destiny doth weave; choose thy course, and split the fates asunder.',
//     type: 'Action',
//   },
//   AI: {
//     description:
//       'Harness the mind of a thousand scholars, let wisdom’s quill conjure insights, creations, and tales anew.',
//     type: 'Action',
//   },
//   Slack: {
//     description: 'Speak unto thy kin in whispered counsel, where swift tidings unite the fellowship.',
//     type: 'Action'
//   },
//   'Google Drive': {
//     description:
//       'Unlock the vault of knowledge, where scrolls and tomes doth await thy command, ever faithful and ready.',
//     type: 'Trigger',
//   },
//   Notion: {
//     description: 'Inscribe thine thoughts upon the eternal ledger, where each note and verse finds sanctuary.',
//     type: 'Action'
//   },
//   'Custom Webhook': {
//     description:
//       'Summon forth powers far and wide, linking realms unknown to weave thy purpose through unseen currents.',
//     type: 'Action',
//   },
//   Discord: {
//     description: 'Proclaim to the realm of Discord; let thy message echo through halls of camaraderie.',
//     type: 'Action',
//   },
//   'Google Calendar': {
//     description: 'Mark the passage of time, invite allies to the fated hour, and let the gathering be known.',
//     type: 'Action',
//   },
//   Trigger: {
//     description: 'Let this be the spark that lights the flame; an event that births a tale yet untold.',
//     type: 'Trigger',
//   },
//   Action: {
//     description: 'And so, the deed is done, a pivotal act upon the stage of thine grand design.',
//     type: 'Action',
//   },
//   Wait: {
//     description: 'Hold thy breath, for patience doth bring reward. Tarry here, and bide thy time wisely.',
//     type: 'Action',
//   },
// };

export const EditorCanvasDefaultCardTypes = {
    'Google Drive': {
        description:
            'Manage files and folders in Google Drive.',
        type: 'Trigger',
    },
    Action: {
        description: 'Perform a task as part of the workflow.',
        type: 'Action',
    },
    AI: {
        description:
            'Use AI for tasks like summarizing and generating content.',
        type: 'Action',
    },
    // 'Airtable Sheets': {
    //   description: 'Store and manage data directly in Airtable spreadsheets.',
    //   type: 'Action',
    // },
    Condition: {
        description: 'Set conditions to guide the workflow path.',
        type: 'Action',
    },
    'Custom Webhook': {
        description:
            'Connect to any app with an API to send data.',
        type: 'Action',
    },
    Discord: {
        description: 'Send messages to a Discord server.',
        type: 'Action',
    },
    Email: {
        description: 'Send an email notification to a user.',
        type: 'Action'
    },
    'Google Calendar': {
        description: 'Create and manage calendar events.',
        type: 'Action',
    },
    // 'Google Sheets': {
    //   description: 'Store and manage data directly in Google Sheets.',
    //   type: 'Action',
    // },
    Notion: {
        description: 'Create entries in Notion directly from your workflow.',
        type: 'Action'
    },
    Slack: {
        description: 'Send a notification to a Slack channel.',
        type: 'Action'
    },
    Trigger: {
        description: 'Start the workflow based on an event.',
        type: 'Trigger',
    },
    Wait: {
        description: 'Delay the next step with a wait timer.',
        type: 'Action',
    },
};



export const WorkflowNodes = {
    Email: { description: 'Send and email to a user', type: 'Action' },
    Condition: {
        description: 'Boolean operator that creates different conditions lanes.',
        type: 'Action',
    },
    AI: {
        description:
            'Use the power of AI to summarize, respond, create and much more.',
        type: 'Action',
    },
    Slack: { description: 'This node helps to send notifications to slack.', type: 'Action' },
    'Google Drive': {
        description:
            'This node has all your files and folders in Google Drive.',
        type: 'Trigger',
    },
    Notion: { description: 'Send data to your notion database using this node.', type: 'Action' },
    'Custom Webhook': {
        description:
            'Connect any app that has an API key and send data to your applicaiton.',
        type: 'Action',
    },
    Discord: {
        description: 'This node helps to send notifications to discord.',
        type: 'Action',
    },
    'Google Calendar': {
        description: 'Create a calendar invite.',
        type: 'Action',
    },
    Trigger: {
        description: 'An event that starts the workflow.',
        type: 'Trigger',
    },
    Action: {
        description: 'An event that happens after the workflow begins',
        type: 'Action',
    },
    Wait: {
        description: 'Delay the next action step by using the wait timer.',
        type: 'Action',
    },
}