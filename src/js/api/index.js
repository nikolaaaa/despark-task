import { imageBoy, imageBubble, imageSettings, imageRocket, imageFolder, imagePuzzle } from "../../images";
import { ConsultationIcon, CustomerIcon, SettingsIcon, TechnologyIcon, SheetIcon, PuzzleIcon } from "../svgIcons";

export const accordionsList = [
  { 
    title: 'Customer inquiry',
    icon: <CustomerIcon width={'48px'} height={'48px'} />, 
    image: imageBoy, 
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' 
  },

  { 
    title: 'Consultation', 
    icon: <ConsultationIcon width={'48px'} height={'48px'} />, 
    image: imageBubble, 
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },

  { 
    title: 'Service', 
    icon: <SettingsIcon width={'48px'} height={'48px'} />, 
    image: imageSettings, 
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },

  { 
    title: 'Technology',
    icon: <TechnologyIcon width={'48px'} height={'48px'} />,
    image: imageRocket,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },

  { 
    title: 'Needs Analysis',
    icon: <SheetIcon width={'48px'} height={'48px'} />,
    image: imageFolder,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },

  { 
    title: 'Solutions',
    icon: <PuzzleIcon width={'48px'} height={'48px'} />,
    image: imagePuzzle,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },
];